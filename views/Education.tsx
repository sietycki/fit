import React from 'react';
import Card from '../components/Card';
import { useAppContext } from '../contexts/AppContext';

interface ArticleProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}
const ArticleCard: React.FC<ArticleProps> = ({title, children, className}) => (
    <Card className={className}>
        <h3 className="text-xl font-bold mb-3 text-gray-100">{title}</h3>
        <div className="prose prose-sm max-w-none text-gray-300 prose-strong:text-gray-200 prose-headings:text-gray-100">
            {children}
        </div>
    </Card>
);


const Education: React.FC = () => {
    const { state } = useAppContext();
    const isPushPull = state.currentApp === 'pushPull';

    const YouTubeLink: React.FC<{ href: string }> = ({ href }) => (
        <div className="mt-4 pt-3 border-t border-gray-700/50">
            <a href={href} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 font-semibold inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.73,18.78 17.93,18.84C17.13,18.91 16.44,18.94 15.84,18.94L15,19C12.81,19 11.2,18.84 10.17,18.56C9.27,18.31 8.69,17.73 8.44,16.83C8.31,16.36 8.22,15.73 8.16,14.93C8.09,14.13 8.06,13.44 8.06,12.84L8,12C8,9.81 8.16,8.2 8.44,7.17C8.69,6.27 9.27,5.69 10.17,5.44C10.64,5.31 11.27,5.22 12.07,5.16C12.87,5.09 13.56,5.06 14.16,5.06L15,5C17.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" /></svg>
                Obejrzyj wideo na YouTube
            </a>
        </div>
    );

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-100">📚 Edukacja - Wszystkie Nowoczesne Zasady</h1>

            <Card className="bg-sky-900/50 border-sky-700">
                <h3 className="font-bold text-sky-300">📌 Edukacja dostosowana do sportu</h3>
                <p className="text-sm text-sky-200 font-semibold mt-1">
                    Oglądasz materiały dla: {isPushPull ? '💪 POMPKI & PODCIĄGANIE' : '🚴 ROLKI'}
                </p>
                <p className="text-sm mt-2 text-gray-300">
                    Poniższe artykuły są uniwersalne dla obu sportów, z dodatkowymi specyficznymi wskazówkami.
                </p>
            </Card>
            
            {isPushPull && (
                 <ArticleCard title="💪 1. Push vs Pull - Równowaga w treningu" className="bg-emerald-900/50 border-emerald-700">
                    <>
                        <p><strong>Dlaczego balans jest kluczowy?</strong> W treningu górnej części ciała musisz zachować równowagę między ćwiczeniami push (pompki, dipy) a pull (podciągania, wiosłowania).</p>
                        <ul className="list-disc list-inside">
                            <li><strong>Push Exercises:</strong> pierś, ramiona przednie, triceps</li>
                            <li><strong>Pull Exercises:</strong> plecy, ramiona tylne, biceps</li>
                            <li><strong>Idealny ratio:</strong> 1:1 push/pull lub nawet więcej pull dla zdrowia barków</li>
                        </ul>
                        <p><strong>🔬 Badania 2024-2025:</strong> Push/Pull ratio 1:1 zmniejsza ryzyko kontuzji barków o 40%!</p>
                        <YouTubeLink href="https://www.youtube.com/watch?v=ASi-4QW_w-c" />
                    </>
                </ArticleCard>
            )}

            <ArticleCard title="🔍 1. Jak działa program?">
                <>
                    <p><strong>Progressive Overload &amp; Neural Adaptation</strong></p>
                    <p>Program wykorzystuje 3 kluczowe fazy:</p>
                    <ul className="list-disc list-inside">
                        <li><strong>Faza 1 (2-4 tygodnie):</strong> Neural Adaptation - wzrost siły bez wzrostu mięśni.</li>
                        <li><strong>Faza 2 (4-8 tygodni):</strong> Muscle Hypertrophy - wzrost masy mięśniowej.</li>
                        <li><strong>Real-time Adaptation:</strong> Plan dostosowuje się po każdym treningu na bazie Twojej wydajności.</li>
                    </ul>
                    <p><strong>🔬 Badania 2024:</strong> Progressive overload to podstawa wzrostu siły. Jeśli wydajność &gt; 110% → trudniej. Jeśli &lt; 80% → łatwiej.</p>
                    <YouTubeLink href="https://www.youtube.com/watch?v=qwv3J-d2g_A" />
                </>
            </ArticleCard>

            <ArticleCard title="💭 2. Mind-Muscle Connection (MMC)">
                 <>
                    <p><strong>+12% hipertrofii przez świadomą aktywację mięśni</strong></p>
                    <p>MMC to mentalne skupienie na konkretnym mięśniu podczas ćwiczenia. Zamiast myśleć "podnieś ciężar", myśl "napnij quadriceps".</p>
                    <p><strong>🔬 Badania 2024:</strong> Osoby stosujące MMC mają +12% większy wzrost mięśni niż bez MMC przy tym samym treningu.</p>
                    <YouTubeLink href="https://www.youtube.com/watch?v=moreC0iA5cI" />
                 </>
            </ArticleCard>
            
            <ArticleCard title="🫁 3. Oddychanie w Treningu">
                <>
                    <p><strong>Właściwa technika oddychania = +siła, +stabilność, +kontrola</strong></p>
                    <p><strong>Zasada:</strong></p>
                    <ul className="list-disc list-inside">
                        <li><strong>Wdech:</strong> Podczas fazy ekscentrycznej (opuszczanie, relaks)</li>
                        <li><strong>Wydech:</strong> Podczas fazy koncentrycznej (wysiłek maksymalny)</li>
                    </ul>
                     <p><strong>🔬 Badania 2025:</strong> Prawidłowe oddychanie zwiększa siłę o 5-10%.</p>
                     <YouTubeLink href="https://www.youtube.com/watch?v=Qh_i_t_h-0U" />
                </>
            </ArticleCard>
            
            <ArticleCard title="⚡ 9. Skoczność - Plyometryka i Moc Eksplozywna">
                <>
                    <p><strong>Skoczność (plyometric power)</strong> to zdolność do szybkiego generowania maksymalnej siły. Na rolkach jest kluczowa do przyspieszania, hamowania i zmiany kierunku.</p>
                    <h4 className="font-bold mt-4">Stretch-Shortening Cycle (SSC)</h4>
                    <p>SSC to proces gdzie mięsień szybko się wydłuża (magazynuje energię), a następnie natychmiast skraca (wypuszcza energię), zwiększając siłę o 15-20%.</p>
                    <div className="bg-amber-900/50 border border-amber-700 p-3 rounded-md mt-2 text-amber-200">
                        <strong>✅ Wniosek:</strong> Najlepsze rezultaty daje kombinacja treningu siłowego i plyometrycznego, co jest zaimplementowane w Twoim programie.
                    </div>
                    <YouTubeLink href="https://www.youtube.com/watch?v=koP6v0yB43I" />
                </>
            </ArticleCard>

            <ArticleCard title="🧘 11. Isometric Training - Static Strength">
                <>
                    <p><strong>Isometric Training</strong> to statyczne kontrakcje mięśni bez ruchu w stawie (np. Wall sit). Zwiększa siłę w konkretnym zakresie ruchu.</p>
                     <p><strong>🔬 Badania 2024-2025:</strong> Trening izometryczny zwiększa siłę o 5% tygodniowo w trenowanym zakresie i ma krótki czas regeneracji.</p>
                     <YouTubeLink href="https://www.youtube.com/watch?v=3-Y72s4s45I" />
                </>
            </ArticleCard>
            
             <ArticleCard title="🏋️ 13. Foam Rolling - Myofascial Release">
                <>
                    <p><strong>Foam Rolling</strong> to technika masażu mięśni i powięzi, która znacząco przyspiesza regenerację i poprawia wydajność.</p>
                    <p><strong>🔬 Badania 2024-2025 - Przełomowe wyniki:</strong></p>
                    <ul className="list-disc list-inside">
                        <li><strong>Jump Performance:</strong> +23% (Foam Rolling) vs +19% (Active Rec.)</li>
                        <li><strong>DOMS (zakwasy):</strong> Znacząco niższe</li>
                    </ul>
                     <div className="bg-sky-900/50 border border-sky-700 p-3 rounded-md mt-2 text-sky-200">
                        <strong>🚀 Wniosek:</strong> Foam Rolling jest skuteczniejszy niż aktywna czy pasywna regeneracja!
                    </div>
                    <YouTubeLink href="https://www.youtube.com/watch?v=j7ws_kI1_oI" />
                </>
            </ArticleCard>

             <ArticleCard title="🤸 14. Proprioceptive Training - Balance & Agility">
                <>
                    <p><strong>Trening proprioceptywny</strong> to trening balansu, zwinności i stabilności kostki - absolutnie kluczowy dla rolkarzy.</p>
                    <p><strong>🔬 Badania 2024-2025 dla rolkarzy:</strong></p>
                     <ul className="list-disc list-inside">
                        <li><strong>Skating Performance:</strong> +30% poprawy</li>
                        <li><strong>Ankle Sprain Prevention:</strong> -45% redukcji kontuzji!</li>
                        <li><strong>Agility & Change of Direction:</strong> +30%</li>
                    </ul>
                     <div className="bg-purple-900/50 border border-purple-700 p-3 rounded-md mt-2 text-purple-200">
                        <strong>🚀 Wniosek:</strong> Trening propriocepcji to obowiązkowy element dla każdego rolkarza!
                    </div>
                    <YouTubeLink href="https://www.youtube.com/watch?v=OFbVn0yS-3o" />
                </>
            </ArticleCard>

        </div>
    );
};

export default Education;