import { Button } from '@/components/ui/button'
import { CategoryHeaderProps } from '@/config/types'
import React from 'react'
import { Link } from 'react-router-dom'

function CategoryListHeader({
    title,
    link,
    urltext
}: CategoryHeaderProps) {
    return (
        <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">
                {title}
            </h2>
            <Button asChild variant={'outline'}>
                <Link to={link}>{urltext}</Link>
            </Button>
        </div>
    )
}

export default CategoryListHeader