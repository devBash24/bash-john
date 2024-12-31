
export interface IProject {
    title: string;
    description: string;
    img: string;
    url?: string;
    git?: string;
    dwl?: string;
    stack: string[];
}

export const projects: IProject[] = [
    {
        title: "PDF Pioneer",
        description: "A web app that allows users to upload and download PDF files.",
        img: "/assets/pdf_pioneer.webp",
        git: "https://github.com/devBash24/PDF-Pioneer/",
        stack: ["PDF", "Tkinter", "Python"],
        dwl: "https://github.com/devBash24/PDF-Pioneer/releases/download/InitialRelease/pdf_pioneer_setup_v1.0.exe"
    },
    {
        title: 'Rengong Ai',
        description: 'An Ai Chatbot made with Nextjs and Gemini Ai',
        img: '/assets/rengong_ai.webp',
        url: 'https://rengong-ai.vercel.app/',
        git: 'https://github.com/devBash24/rengong-ai',
        stack: ['Nextjs', 'Gemini Ai', 'Supabase'],
    },
    {
        title: 'Thrilltopia',
        description: 'A website for a theme park',
        img: '/assets/thrilltopia.png',
        url: 'https://thrilltopia.vercel.app/',
        git: 'https://github.com/devBash24/thrilltopia',
        stack: ['Nextjs', 'Tailwind', 'framer-motion'],
    }
    
]