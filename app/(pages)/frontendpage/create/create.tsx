import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function CreatePage() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      try {
        const response = await fetch('/api/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, description }),
        });
  
        if (response.ok) {
          alert('Record created successfully');
        } else {
          alert('Error creating record');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create</button>
      </form>
    );
  }
  