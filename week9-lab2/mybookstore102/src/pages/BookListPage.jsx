import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';
import { ChevronDownIcon } from '@heroicons/react/outline';

const BookListPage = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [sortBy, setSortBy] = useState('newest');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const bookTitle = {
  1: "7 habits",
  2: "Alchemist",
  3: "Thinking",
  4: "Atomic habits",
  5: "Sapiens",
  6: "Davinci",
  7: "Subtle art",
  8: "Power of now"
};
  const bookImages = {
  1: "7habits.jpg",
  2: "alchemist.jpg",
  3: "thinking.jpg",
  4: "atomichabits.jpg",
  5: "sapiens.jpg",
  6: "davinci.jpg",
  7: "subtleart.jpg",
  8: "powerofnow.jpg"
};
  const categories = ['all', 'fiction', 'non-fiction', 'science', 'history', 'art'];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">หนังสือทั้งหมด</h1>
          <p className="text-gray-600">ค้นพบหนังสือที่คุณชื่นชอบจากคอลเลกชันของเรา</p>
        </div>
        
        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <SearchBar onSearch={(term) => console.log(term)} />
            </div>
            
            {/* Category Filter */}
            <select 
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none 
                focus:ring-2 focus:ring-indigo-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">ทุกหมวดหมู่</option>
              <option value="fiction">นิยาย</option>
              <option value="non-fiction">สารคดี</option>
              <option value="science">วิทยาศาสตร์</option>
              <option value="history">ประวัติศาสตร์</option>
            </select>
            
            {/* Sort */}
            <select 
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none 
                focus:ring-2 focus:ring-indigo-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">ใหม่ล่าสุด</option>
              <option value="price-low">ราคาต่ำ-สูง</option>
              <option value="price-high">ราคาสูง-ต่ำ</option>
              <option value="popular">ยอดนิยม</option>
            </select>
          </div>
        </div>
        
        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Map through books and render BookCard */}
          {[1,2,3,4,5,6,7,8].map(i => (
            <BookCard 
              key={i}
              book={{
                id: i,
                title: `${bookTitle[i]}`,
                author: "Author Name",
                price: 299 + (i * 50),
                coverImage: `/books/${bookImages[i]}`,
                rating: 4,
                reviews: 123,
                category: "Fiction"
              }}
            />
          ))}
        </div>
        
        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg 
              hover:bg-gray-50 disabled:opacity-50">
              ก่อนหน้า
            </button>
            {[1,2,3,4,5].map(page => (
              <button 
                key={page}
                className={`px-4 py-2 rounded-lg ${
                  page === 1 
                    ? 'bg-indigo-600 text-white' 
                    : 'border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="px-4 py-2 border border-gray-300 rounded-lg 
              hover:bg-gray-50">
              ถัดไป
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BookListPage;