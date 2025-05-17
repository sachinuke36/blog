'use client'
import React from 'react'

const BlogDate = ({ date }: { date: string }) => {
  const formatted = new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
  return <span>{formatted}</span>;
}

export default BlogDate