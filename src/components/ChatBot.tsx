import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Send, X, MessageCircle, Sparkles, PartyPopper } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Message {
  role: "user" | "assistant";
  content: string;
  celebration?: boolean;
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Chinwe. Thank you for looking at my work—I'd love to connect with you! Ask me anything about my projects, experience, or just say hi! 👋✨"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("chat-with-chinwe", {
        body: { message: userMessage }
      });

      if (error) throw error;

      const isCelebration = userMessage.toLowerCase().includes("congrat") || 
                           userMessage.toLowerCase().includes("amazing") ||
                           userMessage.toLowerCase().includes("awesome");

      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: data.reply,
        celebration: isCelebration
      }]);

      if (isCelebration) {
        setShowEmojis(true);
        setTimeout(() => setShowEmojis(false), 3000);
      }
    } catch (error) {
      console.error("Chat error:", error);
      toast.error("Oops! Let me try that again...");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCall = () => {
    window.location.href = "tel:+15014424629";
    toast.success("Calling Chinwe...");
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("Saw Your Portfolio - Let's Connect!");
    const body = encodeURIComponent("Hi Chinwe,\n\nI saw your portfolio and I would love to connect.\n\n");
    const mailto = `mailto:uwolloh.chinwe@philander.edu?subject=${subject}&body=${body}`;
    window.open(mailto, "_blank", "noopener,noreferrer");
    toast.success("Opening email...");
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3">
        {!isOpen && (
          <div className="bg-card border-2 border-primary px-4 py-2 rounded-full shadow-lg animate-fade-in">
            <p className="text-sm font-semibold text-foreground whitespace-nowrap">Ask me a question!</p>
          </div>
        )}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-20 w-20 rounded-full shadow-2xl bg-gradient-to-r from-primary via-accent to-secondary hover:scale-110 transition-all duration-300 p-0 overflow-hidden"
          style={{
            boxShadow: "0 0 40px hsl(var(--primary)/0.8), 0 0 80px hsl(var(--accent)/0.6)"
          }}
        >
          {isOpen ? (
            <X className="h-8 w-8" />
          ) : (
            <span className="text-5xl">👩‍💻</span>
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 w-96 h-[600px] bg-card border-2 border-primary rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-scale-in"
          style={{
            boxShadow: "0 0 60px hsl(var(--primary)/0.6), 0 0 100px hsl(var(--accent)/0.4)"
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary via-accent to-secondary p-4 text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center text-6xl" aria-label="Chatbot avatar">
                👩‍💻
              </div>
              <h3 className="text-center font-bold text-xl mt-2 font-rajdhani">Ask Me Anything!</h3>
              <p className="text-center text-sm opacity-90 font-inter">Let's connect 🚀</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2 p-3 bg-background/50 border-b border-border">
            <Button
              onClick={handleCall}
              size="sm"
              className="flex-1 gap-2 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50 hover:scale-105 transition-transform"
            >
              <Phone className="h-4 w-4" />
              Call Me
            </Button>
            <Button
              onClick={handleEmail}
              size="sm"
              className="flex-1 gap-2 bg-accent/20 hover:bg-accent/30 text-accent border border-accent/50 hover:scale-105 transition-transform"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/30 backdrop-blur-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg"
                      : "bg-gradient-to-r from-accent/20 to-secondary/20 text-foreground border border-accent/30 shadow-md"
                  }`}
                >
                  <p className="text-sm font-inter leading-relaxed">{msg.content}</p>
                  {msg.celebration && (
                    <div className="flex gap-1 mt-2 animate-bounce">
                      <PartyPopper className="h-4 w-4" />
                      <Sparkles className="h-4 w-4" />
                      <PartyPopper className="h-4 w-4" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-accent/20 p-3 rounded-2xl border border-accent/30">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Emoji Celebration */}
          {showEmojis && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              {["🎉", "✨", "🚀", "💡", "🎊", "⭐", "🌟", "💫"].map((emoji, i) => (
                <span
                  key={i}
                  className="absolute text-4xl animate-ping"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 100}ms`,
                    animationDuration: "2s"
                  }}
                >
                  {emoji}
                </span>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-card border-t border-border">
            <div className="flex gap-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Ask me anything..."
                className="min-h-[60px] resize-none focus:ring-2 focus:ring-primary transition-all font-inter"
                disabled={isLoading}
              />
              <Button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-primary to-accent hover:scale-110 transition-transform shadow-lg"
                style={{
                  boxShadow: "0 0 20px hsl(var(--primary)/0.5)"
                }}
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
