
import React from 'react';
import CollapsibleSection from './CollapsibleSection';
import { GrowthIcon } from './icons';

interface StrategySectionProps {
    id: string;
}

const StrategySection: React.FC<StrategySectionProps> = ({ id }) => (
    <CollapsibleSection id={id} title="3. خطة التنفيذ والنمو" icon={<GrowthIcon />} borderColorClass="border-accent-amber">
        <p className="mb-6 text-gray-600 font-medium text-lg">الخطة مصممة بعناية لتقليل المخاطر في المراحل المبكرة وضمان الإطلاق السلس للمنصة (الميزانية الأولية: 60,000 د.إ).</p>

        <h3 className="text-xl font-semibold mb-3 text-trust-blue">الخطة الزمنية (12 شهرًا)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
            <div className="p-4 bg-soft-sand rounded-lg border-b-4 border-red-500 shadow-md">
                <p className="font-bold text-lg mb-1">شهر 1 – 3</p>
                <p className="text-sm font-medium text-gray-700">بناء المنصة والتطبيق (44,000 د.إ) + تجهيز المحتوى التعليمي.</p>
            </div>
            <div className="p-4 bg-soft-sand rounded-lg border-b-4 border-yellow-500 shadow-md">
                <p className="font-bold text-lg mb-1">شهر 4 – 6</p>
                <p className="text-sm font-medium text-gray-700">إطلاق تجريبي + بدء حملات التسويق (6,000 د.إ) + إطلاق تحسين محركات البحث (SEO).</p>
            </div>
            <div className="p-4 bg-soft-sand rounded-lg border-b-4 border-green-500 shadow-md">
                <p className="font-bold text-lg mb-1">شهر 7 – 12</p>
                <p className="text-sm font-medium text-gray-700">التوسع التدريجي + إطلاق خدمات استشارية جديدة + تجاوز هدف الـ 20 طالبًا.</p>
            </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200">
             <blockquote className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-highlight-emerald italic relative">
                <p className="text-gray-700 text-base">"المنصة غيرت طريقة متابعتنا لحالة ابننا. الدعم أصبح فورياً والتقدم ملموساً أكثر من أي وقت مضى. نشعر بأننا جزء من فريق العلاج."</p>
                <footer className="text-right mt-4 font-semibold text-highlight-emerald not-italic"> - أم خالد (نموذج توضيحي)</footer>
            </blockquote>
        </div>

        <h3 className="text-xl font-semibold mt-10 mb-4 text-trust-blue">استراتيجية التسويق والانتشار:</h3>
        <ul className="list-disc list-inside text-primary-stone space-y-2">
            <li><strong>التركيز على القيمة (LTV):</strong> استخدام أدوات الذكاء الاصطناعي كدليل على جودة الخدمة العالية في المحتوى الإعلاني.</li>
            <li><strong>التسويق العضوي (SEO):</strong> تحسين محركات البحث للظهور في نتائج "علاج وظيفي عن بعد" لتقليل تكلفة اكتساب العميل (CAC).</li>
            <li><strong>الشراكات الاستراتيجية:</strong> التعاون مع جمعيات ومؤسسات ذوي الهمم للوصول إلى الجمهور المستهدف بثقة عالية.</li>
        </ul>
    </CollapsibleSection>
);

export default StrategySection;
