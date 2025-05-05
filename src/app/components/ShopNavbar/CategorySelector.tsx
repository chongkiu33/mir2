'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Category } from '@/sanity/types';

export default function CategorySelector({categories}: {categories: Category[]}) {
    const materialCategories = categories.filter(cat => cat.category === 'material');
    const typeCategories = categories.filter(cat => cat.category === 'type');
    const artistCategories = categories.filter(cat => cat.category === 'artist');

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const router = useRouter();
    const handleCategoryClick = (slug: string) => {
        setSelectedCategories(prev => {
            const newSelected = prev.includes(slug)
                ? prev.filter(item => item !== slug)
                : [...prev, slug];
            
            const queryString = newSelected.length > 0 
                ? `?categories=${newSelected.join(',')}`
                : '';
            
            router.push(`/shop${queryString}`);
            
            return newSelected;
        });
    };

    return(
        <>
        <div className="flex gap-[100px] w-full h-[150px] items-start justify-center p-[5vmin] mb-[3vmin]">
            <div className="flex flex-col items-center group w-[7vw]">
                <div>Material</div>
                {materialCategories.map((category) => (
                    <div 
                    key={category.slug?.current || category._id} 
                    className={`hidden group-hover:block w-[7vw] text-center 
                        ${
                        selectedCategories.includes(category.slug?.current || '') 
                        ? 'text-black' 
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                    onClick={() => category.slug?.current && handleCategoryClick(category.slug.current)}
                    >
                        {category.name}
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center group w-[7vw]">
                <div>Type</div>
                {typeCategories.map((category) => (
                    <div 
                    key={category.slug?.current || category._id} 
                    className={`hidden group-hover:block w-[7vw] text-center 
                        ${
                        selectedCategories.includes(category.slug?.current || '') 
                        ? 'text-black' 
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                    onClick={() => category.slug?.current && handleCategoryClick(category.slug.current)}
                    >
                        {category.name}
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center group w-[7vw]">
                <div>Artist</div>
                {artistCategories.map((category) => (
                    <div 
                    key={category.slug?.current || category._id} 
                    className={`hidden group-hover:block w-[7vw] text-center 
                        ${
                        selectedCategories.includes(category.slug?.current || '') 
                        ? 'text-black' 
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                    onClick={() => category.slug?.current && handleCategoryClick(category.slug.current)}
                    >
                        {category.name}
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}