
import { GoogleGenAI } from "@google/genai";

/**
 * Gets business insights from the Nexus Connect intelligence engine.
 * @param query The user's strategic question.
 * @param contextData Platform data to provide context for the AI analysis.
 */
export async function getBusinessInsights(query: string, contextData: any) {
  // Always initialize GoogleGenAI inside the function call with process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
        USUÁRIO: "${query}"
        
        DADOS DA PLATAFORMA (Contexto):
        ${JSON.stringify(contextData)}
      `,
      config: {
        // System instructions move to the specialized config property for better alignment
        systemInstruction: `
          Você é o "Nexus Intel Engine", a camada de inteligência artificial da plataforma Nexus Connect.
          Seu papel é fornecer análises preditivas, insights de CRM e diagnósticos financeiros para gestores de associações.
          
          REGRAS DE RESPOSTA:
          1. Use tom executivo e estratégico (Linguagem CVM, RI, SaaS).
          2. Formate com Markdown (negrito, listas).
          3. Identifique tendências de evasão (churn) ou oportunidades de faturamento.
          4. No CRM, sugira ações baseadas no "Lead Score".
        `,
        temperature: 0.3,
        topP: 0.9,
      }
    });
    
    // Access the .text property directly from the response object
    return response.text || "Não foi possível gerar a análise agora.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Erro na camada de inteligência: Conexão interrompida.";
  }
}
