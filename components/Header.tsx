
import React from 'react';

const Header: React.FC = () => {
    const logoUrl = 'https://abilitiesdevelopmentcenter.com/wp-content/uploads/2022/04/1.png';

    return (
        <header className="text-center mb-10 p-6 bg-white shadow-2xl rounded-xl border-b-8 border-trust-blue">
            <div className="flex flex-col items-center mb-6">
                <img src={logoUrl} alt="شعار المركز" className="h-24 md:h-28 w-auto object-contain" />
            </div>
            <p className="text-xl md:text-2xl font-extrabold text-primary-stone">إطلاق منصة الجيل الجديد لتنمية القدرات</p>
            <p className="text-base mt-2 text-gray-500 font-semibold">نسعى لتقديم أفضل الخدمات التشخيصية والتأهيلية من خلال حلول مبتكرة تمكّن كل طفل من الوصول إلى أقصى إمكاناته.</p>
            <p className="text-sm mt-4 text-accent-amber font-bold">دراسة جدوى استراتيجية | مُقدمة من سيدي محمد صلاح الدين بوسعدية</p>
        </header>
    );
};

export default Header;
