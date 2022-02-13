const words = [
    '我喜欢你', 'I love you', 'Je t’aime', 'Ich mag dich.', 'Amore',
    'Amor', 'Любовь', 'أنا معجبة بك', 'प्यार', 'Cinta',
    'Αγάπη','Liefde', 'Dashuri', 'Каханне',
    'Ljubav', 'Láska', 'Armastus', 'Mahal', 'אהבה', 
    'Szerelem', 'Grá', 'Mīlestība', 'Meilė', 'Любов', 
    'Љубовта', 'Cinta', 'عشق', 'Dragoste', 'Láska', 
    'Renmen', 'ፍቅር', 'munaña', 'Sevgi', 'Љубав', 
    'karout', 'amà', 'amôr', 'kærleiki', 'mborayhu', 
    'Upendo', 'sòòyayyàà', 'ljubav', 'Սեր', 'сүю', 
    'сүйүү', 'tia', 'aroha', 'KHAIR', 'प्रेम', 
    'kjærlighet', 'munay', 'jecel', 'Kärlek', 'soymek', 
    '나는 네가 좋다', 'ярату', 'محبت', 'sopp', 'uthando', 
    'ฉันชอบคุณ', 'Aşk', 'I like you', 'ליבע'];
const dom = {
    love: document.querySelector('.love')
}

dom.love.style.setProperty('--particles', words.length)

words.forEach((word, i) => {
    let span = document.createElement('ai')
    span.style.setProperty('--n', i + 1)
    span.innerText = word
    dom.love.appendChild(span)
})