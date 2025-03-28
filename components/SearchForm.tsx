import React from 'react';
import Form from 'next/form';
import { Search } from 'lucide-react';
import SearchFormReset from './SearchFormReset';
const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input text-black"
        placeholder="Search for startups"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button title="hello" type="submit" className="btn btn-primary text-white">
          <Search size={24} color="black" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
