import { Card } from "../ui/card";
import { Linkedin } from "lucide-react";
import { ImageWithFallback } from '../figma/ImageWithFallback';
import ziadImage from 'figma:asset/3a109364db75f1f20b6bde934f937df1b5b7bcf2.png';
import habibImage from 'figma:asset/d675e65c85d06735ec2e17a2686964e08a1748e9.png';
import mackeyImage from 'figma:asset/b3c25dbae495cf7a9e2bc24862e3e44b7b3a4c86.png';
import davidImage from 'figma:asset/060ab337a0a177b2b9a92c582fa63b042c4f889a.png';

const teamMembers = [
  {
    name: 'Ziad Seirafi',
    role: 'Founder & CEO, Technical & Creative Director',
    company: 'Cosmic Forces, Sony Imageworks, Warner Bros.',
    image: ziadImage,
    linkedin: 'https://www.linkedin.com/in/ziadseirafi/',
    bio: 'An entrepreneur at the nexus of where technology and creativity meet, Ziad founded Cosmic Forces which developed multiple Goosebumps games in partnership with Sony Studios and released worldwide on digital platforms: Nintendo Switch, PlayStation, Xbox, PC, Mobile, and Oculus VR.',
    achievement: '🏆 Oscar Academy VFX nominations and wins',
    details: 'The Golden Compass, Alice in Wonderland, Pirates of the Caribbean',
    color: 'chart-1'
  },
  {
    name: 'Habib Abi-Rached',
    role: 'Founder & CTO, Ph.D. Computer Vision & AI',
    company: 'NASA, GE, Ford',
    image: habibImage,
    linkedin: 'https://www.linkedin.com/in/habib-abi-rached-698aa13/',
    bio: 'A leading computer scientist and electrical engineer working in machine learning, computer vision, and 3D graphics at GE Research and Development focusing on AI, Habib lead the team that developed digital twin technology (a pre-LLM AI model).',
    achievement: '🔬 Ph.D. Computer Engineering & Science',
    details: 'Stereo-vision navigation in 3D immersive worlds',
    color: 'chart-5'
  },
  {
    name: 'Mackey Kinard',
    role: 'Founder & Senior Developer',
    company: 'Cosmic Forces, BabylonJS',
    image: mackeyImage,
    linkedin: 'https://forum.babylonjs.com/u/mackeyk24/summary',
    bio: 'Author of Babylon Toolkit Extension in BabylonJS',
    achievement: '',
    details: '',
    color: 'chart-3'
  },
  {
    name: 'David Kim',
    role: 'Commercial Advisor',
    company: 'Animoca Brands, Sony Pictures, 20th Century FOX',
    image: davidImage,
    linkedin: 'https://www.linkedin.com/in/david-kim-3a3978/',
    bio: 'Video Game Publishing, Business Development & Marketing Executive',
    achievement: '',
    details: '',
    color: 'chart-4'
  }
];

export function TeamSlide() {
  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">Team</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          The CODEWRX founding team has strong expertise in both Game Development and AI Research & Development
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {teamMembers.map((member, index) => (
          <Card key={index} className={`codewrx-card p-6 border-${member.color}/20`}>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {member.image ? (
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-chart-1 to-chart-3">
                      <ImageWithFallback
                        src={member.image}
                        alt={`${member.name} profile photo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className={`w-24 h-24 bg-gradient-to-br from-${member.color} to-chart-1 rounded-xl flex items-center justify-center text-white font-bold text-xl`}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg leading-tight">{member.name}</h3>
                        {member.linkedin !== '#' && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-5 h-5 rounded-full flex items-center justify-center hover:scale-110 transition-transform ${
                              member.name === 'Mackey Kinard' 
                                ? 'bg-gradient-to-r from-orange-500 to-red-500' 
                                : 'bg-[#0077B5]'
                            }`}
                          >
                            {member.name === 'Mackey Kinard' ? (
                              <div className="w-3 h-3 text-white font-bold text-xs flex items-center justify-center">
                                B
                              </div>
                            ) : (
                              <Linkedin className="w-3 h-3 text-white" />
                            )}
                          </a>
                        )}
                      </div>
                      <div className={`text-sm text-${member.color} font-medium mb-1`}>{member.role}</div>
                      <div className="text-xs text-muted-foreground">{member.company}</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
              {member.achievement && (
                <div className="space-y-0">
                  <div className={`text-xs text-${member.color} font-medium`}>{member.achievement}</div>
                  {member.details && (
                    <div className="text-xs text-muted-foreground">{member.details}</div>
                  )}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}