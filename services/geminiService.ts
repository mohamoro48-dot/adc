
import type { MarketingAngle } from '../types';

// This is a mocked service that simulates a call to the Gemini API.
// In a real application, this would import { GoogleGenAI } from "@google/genai"
// and make an actual API call.

export const generateMarketingContent = async (prompt: string): Promise<MarketingAngle[]> => {
    console.log("Simulating Gemini API call with prompt:", prompt);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (!prompt || prompt.trim() === "") {
        return [];
    }
    
    const truncatedPrompt = prompt.slice(0, 40);

    return [
        {
            title: "زاوية 1: الشعار العاطفي",
            slogan: `أصبح تأهيل طفلك رحلة من بيتك. ${truncatedPrompt}... يبني مستقبلاً أفضل.`
        },
        {
            title: "زاوية 2: الشعار المنطقي (حل المشكلة)",
            slogan: `توقف عن البحث عن مراكز بعيدة. نقدّم ${truncatedPrompt}... بأقل تكلفة وجهد تحت إشراف متخصص.`
        },
        {
            title: "زاوية 3: دعوة العمل الموجهة",
            slogan: `ابدأ الآن خطوة ${truncatedPrompt}... استشر أخصائيينا لتأكيد التوافق.`
        }
    ];
};
