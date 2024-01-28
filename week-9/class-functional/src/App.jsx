import { useEffect, useState } from "react";
import axios from "axios";


function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine)

  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(true)
    })
    window.addEventListener("offline", () => {
      setIsOnline(true)
    })
  })

  return isOnline
}

function useMousePointer() {
  const [position, setPosition] = useState({x: 0, y: 0})

  const handleMouseEvent = (e) => {
    setPosition({x: e.clientX, y: e.clientY})
  }
}

function useInterval(fn, timeout) {
  useEffect(() => {
    const id = setInterval(() => {
      fn()
    }, timeout)

    return () => {
      clearInterval(id)
    }
  }, [timeout, fn])
}


function useDebounce(inputVal, delay) {
  const [debouncVal, setDebounceVal] = useState(inputVal)

  useEffect(() => {
    const id = setTimeout(() => {
      setDebounceVal(inputVal)
    }, delay)

    return () => {
      clearTimeout(id)
    }
  }, [delay, inputVal])

  return debouncVal
}


function App() {
  
  const [count, setCount] = useState(0)

  // useInterval(() => {
  //   setCount(count => count + 1)
  // }, 1000)

  return (
    <>
     count is {count}
     <SearchBar />
    </>
  );
}


export default App;


// import React, { useState } from 'react';
// import useDebounce from './useDebounce';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <>
    the debounce value is {debouncedValue}
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
    </>
  );
};

// export default SearchBar;