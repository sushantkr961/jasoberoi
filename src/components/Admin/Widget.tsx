import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface WidgetProps {
    title: string;
    description: string;
    count: number;
    icon: React.ReactNode;
    href: string;
    props?: object;
}

const Widget: React.FC<WidgetProps> = ({ title, description, count, icon, href, ...prps }: WidgetProps) => {
    return (
        <Link href={href} className="px-6 py-8 bg-white rounded-2xl border shadow-xl justify-start hover:bg-gray-50 duration-200 items-start gap-2.5 flex ">
            <div className="flex-col justify-start items-start gap-4 inline-flex">
                    <Image
                        src={icon?.toString()!}
                        alt='icon'
                        height={80}
                        width={80}
                    />
                <h4 className="text-black text-lg font-semibold leading-8">{title} </h4>
                <p className="text-gray-950 text-md font-normal leading-snug">{description}</p>
                {/* <span className="text-gray-950 text-sm font-normal leading-snug">Count: {count}</span> */}
            </div>
        </Link>
    );
};

export default Widget;
