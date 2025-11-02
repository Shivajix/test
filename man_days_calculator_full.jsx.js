import React, { useState } from 'react';
import { Sun, Moon, Globe, Calculator, FileText, AlertTriangle, BookOpen, CheckCircle2, Info } from 'lucide-react';

export default function ManDaysWorkedGuide() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === 'en' ? 'hi' : 'en');

  const t = {
    en: {
      title: 'Man-Days Worked Calculator – Complete Guide',
      intro: 'Tracking man-days (and projected man-hours) is a cornerstone of HSE and project reporting. Accurate figures help productivity metrics, cost control, and legal/logging safety indicators (i.e., TRIR per 200k hours). This Man-Days Worked Calculator helps you compute headcount totals, man-days, and self man-hours—then export a clean AI-PDF for records and audits.',
      whatIs: 'What Is a Man-Days Worked Calculator?',
      desc: 'A simple structured tool that converts crew numbers and working days into report-ready totals. It avoids spreadsheet errors, standardizes the method, and produces a tidy PDF attachment for daily/weekly HSE reports.',
      includes: 'It typically includes:',
      formulas: 'Core Formulas (Standard)',
      components: 'Key Components of the Calculator',
      usage: 'How to Use the Man-Days Worked Calculator',
      examples: 'Worked Examples',
      whyMatters: 'Why This Matters for HSE & PMO',
      pitfalls: 'Common Pitfalls (and Fixes)',
      best: 'Best Practices',
      faq: 'Frequently Asked Questions'
    },
    hi: {
      title: 'मैन-डेज़ वर्क्ड कैलकुलेटर – संपूर्ण गाइड',
      intro: 'मैन-डेज़ (और प्रोजेक्टेड मैन-ऑवर्स) को ट्रैक करना HSE और प्रोजेक्ट रिपोर्टिंग का एक प्रमुख हिस्सा है। सटीक आंकड़े उत्पादकता, लागत नियंत्रण, और सुरक्षा संकेतकों (जैसे TRIR प्रति 200k घंटे) में मदद करते हैं। यह कैलकुलेटर हेडकाउंट, मैन-डेज़ और मैन-ऑवर्स को सरल तरीके से गणना करने में मदद करता है और रिपोर्ट/ऑडिट के लिए PDF एक्सपोर्ट करता है।',
      whatIs: 'मैन-डेज़ वर्क्ड कैलकुलेटर क्या है?',
      desc: 'यह एक सरल उपकरण है जो वर्कर संख्या और कार्य दिवसों को रिपोर्ट-रेडी डेटा में बदलता है। यह एक्सेल त्रुटियों से बचाता है, मानक सूत्र लागू करता है और PDF फाइल बनाता है।',
      includes: 'इसमें आमतौर पर शामिल हैं:',
      formulas: 'मुख्य सूत्र (मानक)',
      components: 'कैलकुलेटर के मुख्य घटक',
      usage: 'मैन-डेज़ वर्क्ड कैलकुलेटर का उपयोग कैसे करें',
      examples: 'उदाहरण',
      whyMatters: 'HSE और PMO के लिए इसका महत्व',
      pitfalls: 'सामान्य गलतियाँ (और समाधान)',
      best: 'सर्वोत्तम अभ्यास',
      faq: 'अक्सर पूछे जाने वाले प्रश्न'
    }
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen transition-all`}> 
      <header className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
        <h1 className="text-xl font-bold flex items-center gap-2"><Calculator className="text-green-500" /> {t[language].title}</h1>
        <div className="flex gap-3">
          <button onClick={toggleLanguage} className="flex items-center gap-1 border px-3 py-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"><Globe size={18}/> {language === 'en' ? 'हिन्दी' : 'English'}</button>
          <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">{darkMode ? <Sun /> : <Moon />}</button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-5 space-y-8">
        <section>
          <p className="leading-relaxed text-lg">{t[language].intro}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-green-600 dark:text-green-400"><CheckCircle2 /> {t[language].whatIs}</h2>
          <p className="mt-2">{t[language].desc}</p>

          <h3 className="mt-3 font-semibold text-lg">{t[language].includes}</h3>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Crew inputs (Skilled, Unskilled, Contract)</li>
            <li>Period inputs (Days) and optional Hours/Day</li>
            <li>Auto computed Headcount, Man-Days, Man-Hours</li>
            <li>PDF export for documentation</li>
            <li>Validation checks and formatting rules</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-yellow-600 dark:text-yellow-400"><FileText /> {t[language].formulas}</h2>
          <ul className="list-disc ml-6 mt-2">
            <li>Headcount = Skilled + Unskilled + Contract</li>
            <li>Man-Days = Headcount × Days</li>
            <li>Man-Hours = Man-Days × Hours/Day</li>
            <li>Adjust Hours if overtime or site-specific rules apply.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600 dark:text-blue-400"><BookOpen /> {t[language].components}</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><b>Inputs:</b> Skilled, Unskilled, Contract, Headcount, Period (Days), Hours/Day</li>
            <li><b>Outputs:</b> Man-Days, Man-Hours, Headcount totals</li>
            <li><b>Actions:</b> PDF Export, Data Reset, Auto Summary</li>
            <li><b>Validation:</b> Prevents empty or incorrect entries</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-purple-600 dark:text-purple-400">⚙️ {t[language].usage}</h2>
          <ol className="list-decimal ml-6 mt-2 space-y-1">
            <li>Enter Crew Counts – Skilled, Unskilled, Contract</li>
            <li>Set Period Days – e.g., 7, 15, or 30</li>
            <li>Optionally add Hours/Day (e.g., 8 or 10)</li>
            <li>Click Calculate – view totals for Headcount, Man-Days, and Man-Hours</li>
            <li>Download PDF – attach with HSE Report</li>
            <li>Reset – clear inputs for new period</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-pink-600 dark:text-pink-400">📊 {t[language].examples}</h2>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg space-y-3">
            <p><b>Example 1:</b> Construction Project (8-hour day)</p>
            <p>Skilled: 40, Unskilled: 60, Contract: 20 → Headcount = 120</p>
            <p>Days = 25 → Man-Days = 120 × 25 = 3,000</p>
            <p>Hours/Day = 8 → Man-Hours = 3,000 × 8 = 24,000</p>

            <p><b>Example 2:</b> Shutdown (10-hour day)</p>
            <p>Skilled: 80, Unskilled: 120, Contract: 50 → Headcount = 250</p>
            <p>Days = 20 → Man-Days = 250 × 20 = 5,000</p>
            <p>Man-Hours = 5,000 × 10 = 50,000</p>

            <p><b>Example 3:</b> Training Day (count only man-days)</p>
            <p>Skilled: 20, Unskilled: 0, Contract: 0 → Headcount = 20</p>
            <p>Days = 1 → Man-Days = 20 × 1 = 20</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-pink-700 dark:text-pink-300">📍 {t[language].whyMatters}</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Accurate KPIs – TRIR, LTIFR & productivity metrics rely on correct data.</li>
            <li>Budget & Cost Control – validated labor data reduces waste.</li>
            <li>Audit Readiness – PDF reports simplify audits.</li>
            <li>Consistency – ensures same calculation across sites.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-red-600 dark:text-red-400"><AlertTriangle /> {t[language].pitfalls}</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Counting Errors: ensure actual attendance validation.</li>
            <li>Double Counting: confirm no duplicate categories.</li>
            <li>Inflated Hours: avoid overtime unless recorded.</li>
            <li>Missing Days: the tool enforces validation to prevent zero days.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-indigo-600 dark:text-indigo-400"><Info /> {t[language].best}</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Align Hours/Day with your official HSE manual.</li>
            <li>Use Project/Site tag to label your PDF for record clarity.</li>
            <li>Attach the PDF to weekly or daily Safety Reports.</li>
            <li>Maintain consistent reporting each month.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-teal-600 dark:text-teal-400">❓ {t[language].faq}</h2>
          <p>If Hours/Day is blank, the tool will compute only Man-Days and skip Man-Hours. To get total hours, input a valid daily hour value.</p>
        </section>
      </main>

      <footer className="text-center py-4 text-sm border-t border-gray-300 dark:border-gray-700 opacity-80">
        © 2025 HSE Tools | Man-Days Worked Calculator – All Rights Reserved
      </footer>
    </div>
  );
}
