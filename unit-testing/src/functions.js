// Example function
// Input: str (string) - e.g., "hello"
// Output: string - e.g., "Hello"
export function capitalizeFirst(str) {
    if (!str) return '';
    return str[0].toUpperCase() + str.slice(1);
}

// 1. Reverse a string
// Input: str (string) - e.g., "hello"
// Output: string - e.g., "olleh"
export function reverseString(str) {
    if (!str) return '';
    return str.split('').reverse().join('');
}

// 2. Count vowels in a string
// Input: str (string) - e.g., "hello world"
// Output: number - e.g., 3
export function countVowels(str) {
    if (!str) return 0;
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}

// 3. Check if a string is a palindrome
// Input: str (string) - e.g., "racecar"
// Output: boolean - e.g., true
export function isPalindrome(str) {
    if (!str) return true;
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}

// 4. Find the longest word in a string
// Input: str (string) - e.g., "hello world programming"
// Output: string - e.g., "programming"
export function findLongestWord(str) {
    if (!str) return '';
    const words = str.split(' ').filter(word => word.length > 0);
    if (words.length === 0) return '';
    return words.reduce((longest, current) => 
        current.length > longest.length ? current : longest
    );
}

// 5. Convert a number to its word representation (0-9)
// Input: num (number) - e.g., 5
// Output: string - e.g., "five"
export function numberToWord(num) {
    const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    if (num >= 0 && num <= 9) {
        return words[num];
    }
    return 'invalid';
}

// 6. Check if a string contains only letters
// Input: str (string) - e.g., "HelloWorld"
// Output: boolean - e.g., true
export function isOnlyLetters(str) {
    if (!str) return false;
    return /^[a-zA-Z]+$/.test(str);
}

// 7. Remove all spaces from a string
// Input: str (string) - e.g., "hello world"
// Output: string - e.g., "helloworld"
export function removeSpaces(str) {
    if (!str) return '';
    return str.replace(/\s/g, '');
}

// 8. Count the occurrences of a character in a string
// Input: str (string), char (string) - e.g., "hello", "l"
// Output: number - e.g., 2
export function countChar(str, char) {
    if (!str || !char) return 0;
    return str.split('').filter(c => c === char).length;
}

// 9. Check if a string starts with a vowel
// Input: str (string) - e.g., "apple"
// Output: boolean - e.g., true
export function startsWithVowel(str) {
    if (!str) return false;
    const vowels = 'aeiouAEIOU';
    return vowels.includes(str[0]);
}

// 10. Convert a string to title case (first letter of each word capitalized)
// Input: str (string) - e.g., "hello world"
// Output: string - e.g., "Hello World"
export function toTitleCase(str) {
    if (!str) return '';
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

// 11. Check if a number is even
// Input: num (number) - e.g., 8
// Output: boolean - e.g., true
export function isEven(num) {
    return num % 2 === 0;
}

// 12. Validate email format (uses regex)
// Input: email (string) - e.g., "user@example.com"
// Output: boolean - e.g., true
export function validateEmail(email) {
    if (!email) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 13. Validate user age using a validator function
// Input: age (number), validator (function) - e.g., 25, (age) => age >= 18
// Output: boolean - e.g., true
export function validateUserAge(age, validator) {
    if (typeof age !== 'number' || !validator) return false;
    return validator(age);
}

// 14. Calculate discount using a discount calculator function
// Input: price (number), discountCalc (function) - e.g., 100, (price) => price * 0.1
// Output: number - e.g., 10
export function calculateDiscount(price, discountCalc) {
    if (typeof price !== 'number' || !discountCalc) return 0;
    return discountCalc(price);
}

// 15. Filter products by category using a filter function
// Input: products (array), filterFunc (function) - e.g., [{name: "laptop", category: "electronics"}], (p) => p.category === "electronics"
// Output: array - e.g., [{name: "laptop", category: "electronics"}]
export function filterProducts(products, filterFunc) {
    if (!Array.isArray(products) || !filterFunc) return [];
    return products.filter(filterFunc);
}

// 16. Check if password meets requirements using a checker function
// Input: password (string), checker (function) - e.g., "MyPass123", (pwd) => pwd.length >= 8
// Output: boolean - e.g., true
export function validatePassword(password, checker) {
    if (!password || !checker) return false;
    return checker(password);
}

// 17. Sort students by grade using a sorter function
// Input: students (array), sorter (function) - e.g., [{name: "John", grade: 85}], (a, b) => b.grade - a.grade
// Output: array - e.g., [{name: "John", grade: 85}]
export function sortStudents(students, sorter) {
    if (!Array.isArray(students) || !sorter) return [];
    return students.sort(sorter);
}
    
