export const metadata = {
    title: 'БАНКРОТСТВО МФЦ | Законное списание долгов по 127ФЗ.',
    description: '',
    icons: {
        icon: '/file.svg', // Убедись, что файл лежит в папке public
    },
};

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 p-4">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Привет от Next.js + Tailwind!</h1>
            <p className="text-lg text-gray-700">Это простая приветственная страница.</p>
        </main>
    );
}