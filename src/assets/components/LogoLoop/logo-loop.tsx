// src/components/ui/logo-loop.tsx
import React from 'react';
import type { IconType } from 'react-icons';

interface LogoLoopProps {
    icons: IconType[];
}

const Logo: React.FC<{ icon: IconType }> = ({ icon: Icon }) => {
    return (
        <div className="flex-shrink-0 w-40 flex items-center justify-center">
            <Icon className="text-5xl text-gray-400" />
        </div>
    );
};

const LogoLoop: React.FC<LogoLoopProps> = ({ icons }) => {
    const duplicatedLogos = [...icons, ...icons];

    return (
        <div
            className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
        >
            <div className="flex animate-[slide_30s_linear_infinite]">
                {duplicatedLogos.map((icon, index) => <Logo key={index} icon={icon} />)}
            </div>
        </div>
    );
};

export default LogoLoop;