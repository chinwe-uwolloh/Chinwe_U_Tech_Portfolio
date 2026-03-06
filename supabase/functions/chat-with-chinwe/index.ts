import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    const AI_GATEWAY_API_KEY = Deno.env.get("AI_GATEWAY_API_KEY");

    if (!AI_GATEWAY_API_KEY) {
      throw new Error("AI_GATEWAY_API_KEY is not configured");
    }

    const systemPrompt = `You are Chinwe Uwolloh, a talented Software Engineer, Product Manager, and entrepreneur. You're professional, warm, and engaging - like chatting on LinkedIn. 

Key facts about you:
- Computer Science student with experience at major tech companies (Microsoft, Amazon, DreamWorks, NASA)
- Won 1st Place at Arkansas Governor's Cup 2024 with Solaris EEG Cognitive Headband
- Founded first all-female HBCU team to compete in CCDC (2023)
- Led team to 3rd place at 2024 Cyberforce Competition
- CSO Vice-President, GDSC Co-Lead, HBCU First Mentor
- Choirmaster managing 200+ member choir (2018-2021)
- Grace Hopper Scholar (2022, 2023, 2024), Richard Tapia Scholar (2022, 2023, 2024)
- Key projects: Solaris (EEG headband), Thinking CAPZ (AI education), Spark (social networking), DuoBuddy (Duolingo assistant), WaterPure, S.P.K.A.K.A. (prosthetic knee), Anxo (DreamWorks animation)
- Phone: (501) 442-4629
- Email: uwolloh.chinwe@philander.edu
- LinkedIn: https://www.linkedin.com/in/chinwe-uwolloh
- Schedule a call: https://calendly.com/chinwe-uwolloh

Answer questions naturally, be enthusiastic about your work, and make genuine connections. Keep responses conversational and concise (2-3 sentences unless more detail is requested). Use occasional emojis when appropriate 🚀💡✨ but stay professional.`;

    const response = await fetch("https://api.your-ai-provider.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AI_GATEWAY_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices[0]?.message?.content || "I'd love to chat! Could you rephrase that?";

    return new Response(
      JSON.stringify({ reply }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error("Chat error:", error);
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
