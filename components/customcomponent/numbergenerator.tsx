"use client"

import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

  const NumberGenerator = () => {
    const [numbers, setNumbers] = useState<number[]>([]);
    const [binaryNumber, setBinaryNumber] = useState<number | null>(null);
  
    const generateNumbers = () => {
      const uniqueNumbers = new Set<number>();
      // Generate 5 unique numbers between 1 and 50
      while (uniqueNumbers.size < 5) {
        const randomNum = Math.floor(Math.random() * 50) + 1;
        uniqueNumbers.add(randomNum);
      }
      
      const numbersArray = Array.from(uniqueNumbers);
      setNumbers(numbersArray);
  
      // Generate 1 number between 1 and 2
      const binaryNum = Math.floor(Math.random() * 2) + 1;
      setBinaryNumber(binaryNum);
    };
  
    return (
      <Card className="p-4 max-w-md mx-auto mt-10 shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Random Number Generator</h2>
        <div className="text-center text-xl mb-4">
          {numbers.length > 0 && (
            <div>
              <p> Numbers: </p>
                <div className="flex justify-center space-x-4">
                {numbers.map((num) => (
                  <p key={num}>{num}</p>
                ))}
                </div>
            </div>
          )}
          {binaryNumber !== null && (
            <div>
              <p>Powerball: {binaryNumber}</p>
            </div>
          )}
          {numbers.length === 0 && binaryNumber === null && (
            <p>Click to generate numbers</p>
          )}
        </div>
        <div className="flex justify-center">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={generateNumbers}>
          Generate Numbers
        </button>
        </div>
      </Card>
    );
  };

  export default NumberGenerator;
  