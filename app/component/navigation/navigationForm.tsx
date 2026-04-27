"use client";
import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';

export default function Navigationform({ color }) {
  const navigate = useRouter();
  const [search, setSearch] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate.push(`/search?item=${search.trim()}`);
  };

  return (
    <Form className="w-100 d-flex" onSubmit={onSubmitHandler}>
      <style jsx>{`
        /* This targets the placeholder specifically and updates with the prop */
        .dynamic-search::placeholder {
          color: ${color};
          opacity: 0.6; /* Makes it look like a placeholder but in the right hue */
          transition: color 0.6s ease;
        }
      `}</style>

      <InputGroup 
        style={{ 
          // If text is dark (#111), we use a dark transparent bg, otherwise light
          background: color === '#111' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.2)', 
          borderRadius: '50px', 
          overflow: 'hidden', 
          backdropFilter: 'blur(5px)',
          border: `1px solid ${color}33`, // Added a very faint border for definition
          transition: 'all 0.6s ease'
        }}
      >
        <InputGroup.Text style={{ background: 'transparent', border: 'none', paddingLeft: '20px' }}>
          <FaSearch size={14} style={{ color: color, transition: 'color 0.6s ease' }} />
        </InputGroup.Text>
        
        <Form.Control
          placeholder="Search items..."
          className="dynamic-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            background: 'transparent',
            border: 'none',
            color: color,
            boxShadow: 'none',
            fontSize: '0.9rem',
            transition: 'color 0.6s ease'
          }}
        />
      </InputGroup>
    </Form>
  );
}