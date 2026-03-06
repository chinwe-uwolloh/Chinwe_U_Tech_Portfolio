import philanderSmithLogo from "@/assets/logos/philander-smith.png";
import cmditLogo from "@/assets/logos/cmdit.png";
import scienceVentureLogo from "@/assets/logos/science-venture-studio.jpeg";
import shecodesLogo from "@/assets/logos/shecodes.jpeg";
import socialJusticeLogo from "@/assets/logos/social-justice.png";
import surestartLogo from "@/assets/logos/surestart-ai.jpeg";
import tmcfLogo from "@/assets/logos/tmcf.png";
import uncfLogo from "@/assets/logos/uncf.jpeg";
import educationUsaLogo from "@/assets/logos/education-usa.png";
import girlsWhoCodeLogo from "@/assets/logos/girls-who-code.png";
import girlsWhoPmLogo from "@/assets/logos/girls-who-pm.png";
import graceHopperLogo from "@/assets/logos/grace-hopper.jpeg";
import hbcu20x20Logo from "@/assets/logos/hbcu-20x20.jpeg";
import hbcuFirstLogo from "@/assets/logos/hbcu-first.jpeg";
import hbcuFoundersLogo from "@/assets/logos/hbcu-founders-initiative.png";
import ncwitLogo from "@/assets/logos/ncwit.png";
import blackMenLogo from "@/assets/logos/100-black-men.png";
import wicysLogo from "@/assets/logos/wicys.jpeg";
import afrotechLogo from "@/assets/logos/afrotech.png";
import asriLogo from "@/assets/logos/asri.png";
import bvccLogo from "@/assets/logos/bvcc.jpeg";
import choirLogo from "@/assets/logos/choir.png";
import rabbitholeathonLogo from "@/assets/logos/rabbitholeathon.jpeg";

// Company brand logos (local fallbacks)
import microsoftLogo from "@/assets/logos/microsoft.png";
import metaLogo from "@/assets/logos/meta.png";
import amazonLogo from "@/assets/logos/amazon.png";
import jpmorganLogo from "@/assets/logos/jpmorgan.png";
import googleLogo from "@/assets/logos/google.png";
import capitalOneLogo from "@/assets/logos/capital-one.png";
import wellsFargoLogo from "@/assets/logos/wells-fargo.png";
import dreamworksLogo from "@/assets/logos/dreamworks.png";
import nasaLogo from "@/assets/logos/nasa.png";
import adobeLogo from "@/assets/logos/adobe.png";
import codepathLogo from "@/assets/logos/codepath.png";
import southernBancorpLogo from "@/assets/logos/southern-bancorp-new.png";
import tapiaLogo from "@/assets/logos/tapia-conference.png";

import Logo from "@/components/Logo";
import { usePreloadImages } from "@/hooks/usePreloadImages";

const affiliations = [
  { name: "Microsoft", logo: microsoftLogo, fallback: "https://logo.clearbit.com/microsoft.com" },
  { name: "Meta", logo: metaLogo, fallback: "https://logo.clearbit.com/meta.com" },
  { name: "Amazon", logo: amazonLogo, fallback: "https://logo.clearbit.com/amazon.com" },
  { name: "JPMorgan Chase", logo: jpmorganLogo, fallback: "https://logo.clearbit.com/jpmorganchase.com" },
  { name: "Google", logo: googleLogo, fallback: "https://logo.clearbit.com/google.com" },
  { name: "Capital One", logo: capitalOneLogo, fallback: "https://logo.clearbit.com/capitalone.com" },
  { name: "Wells Fargo", logo: wellsFargoLogo, fallback: "https://logo.clearbit.com/wellsfargo.com" },
  { name: "DreamWorks", logo: dreamworksLogo, fallback: "https://logo.clearbit.com/dreamworks.com" },
  { name: "NASA", logo: nasaLogo, fallback: "https://logo.clearbit.com/nasa.gov" },
  { name: "Adobe", logo: adobeLogo, fallback: "https://logo.clearbit.com/adobe.com" },
  { name: "CodePath", logo: codepathLogo, fallback: "https://logo.clearbit.com/codepath.org" },
];

const organizations = [
  { name: "Philander Smith University", logo: philanderSmithLogo },
  { name: "CMDiT", logo: cmditLogo },
  { name: "Science Venture Studio", logo: scienceVentureLogo },
  { name: "SheCodes", logo: shecodesLogo },
  { name: "Social Justice Learning Institute", logo: socialJusticeLogo },
  { name: "SureStart AI", logo: surestartLogo },
  { name: "TMCF", logo: tmcfLogo },
  { name: "UNCF", logo: uncfLogo },
  { name: "Education USA", logo: educationUsaLogo },
  { name: "Girls Who Code", logo: girlsWhoCodeLogo },
  { name: "Girls Who PM", logo: girlsWhoPmLogo },
  { name: "Grace Hopper Celebration", logo: graceHopperLogo },
  { name: "HBCU 20x20", logo: hbcu20x20Logo },
  { name: "HBCU First", logo: hbcuFirstLogo },
  { name: "HBCU Founders Initiative", logo: hbcuFoundersLogo },
  { name: "NCWIT Aspirations in Computing", logo: ncwitLogo },
  { name: "100 Black Men of America", logo: blackMenLogo },
  { name: "Women in CyberSecurity (WiCyS)", logo: wicysLogo },
  { name: "AfroTech", logo: afrotechLogo },
  { name: "ASRI", logo: asriLogo },
  { name: "Black Venture Consortium", logo: bvccLogo },
  { name: "Choir", logo: choirLogo },
  { name: "Rabbitholeathon", logo: rabbitholeathonLogo },
  { name: "Richard Tapia Celebration Conference", logo: tapiaLogo },
  { name: "Southern Bancorp", logo: southernBancorpLogo },
];

const AffiliationsLogos = () => {
  const critical = new Set(["Microsoft","Meta","Google","Amazon","JPMorgan Chase","Capital One"]);
  const criticalUrls = affiliations.filter(a => critical.has(a.name)).map(a => a.logo as string);
  usePreloadImages(criticalUrls);
  return (
    <section className="py-16 bg-background/50 border-y border-border/30">
      <div className="container px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Company Affiliations */}
          <div className="space-y-8">
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {affiliations.map((affiliation, idx) => (
                <div
                  key={affiliation.name}
                  className="animate-fade-in group w-full"
                  style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="p-4 rounded-xl bg-card/20 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] md:hover:scale-110 flex items-center justify-center min-h-[80px]">
                    <Logo
                      src={affiliation.logo}
                      alt={`${affiliation.name} logo`}
                      className="h-12 w-auto max-w-full"
                      fallback={affiliation.fallback}
                      priority={critical.has(affiliation.name)}
                      width={160}
                      height={48}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Organizations & Affiliations */}
          <div className="space-y-8 pt-8 border-t border-border/30">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground font-rajdhani">
              Organizations & Affiliations
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
              {organizations.map((org, idx) => (
                <div
                  key={org.name}
                  className="animate-fade-in group w-full"
                  style={{ animationDelay: `${idx * 100 + 600}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="p-4 rounded-xl bg-card/20 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--accent)/0.4)] md:hover:scale-110 flex items-center justify-center min-h-[80px]">
                    <Logo
                      src={org.logo}
                      alt={`${org.name} logo`}
                      className="h-12 w-auto max-w-full"
                      width={160}
                      height={48}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliationsLogos;
