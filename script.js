const mainInput = document.getElementById('mainInput');
const speakBtn = document.getElementById('speakBtn');

const volumeSlider = document.getElementById('volumeSlider');
const rateSlider = document.getElementById('rateSlider');
const pitchSlider = document.getElementById('pitchSlider');

const volumeValue = document.getElementById('volumeValue');
const rateValue = document.getElementById('rateValue');
const pitchValue = document.getElementById('pitchValue');

// 🎨 Slider fonini yangilovchi funksiya
function updateSliderBackground(slider, value, min, max, color1 = '#1e90ff', color2 = '#444') {
    const percent = ((value - min) / (max - min)) * 100;
    slider.style.background = `linear-gradient(to right, ${color1} ${percent}%, ${color2} ${percent}%)`;
}

// Boshlang'ich ranglarni o‘rnatish
updateSliderBackground(volumeSlider, volumeSlider.value, 0, 1);
updateSliderBackground(rateSlider, rateSlider.value, 0.1, 2);
updateSliderBackground(pitchSlider, pitchSlider.value, 0, 2);

// Har bir slayder uchun hodisalar
volumeSlider.addEventListener('input', () => {
    const value = parseFloat(volumeSlider.value);
    volumeValue.textContent = `${Math.round(value * 100)}%`;
});

rateSlider.addEventListener('input', () => {
    const value = parseFloat(rateSlider.value);
    rateValue.textContent = `${value.toFixed(1)}x`;
});

pitchSlider.addEventListener('input', () => {
    const value = parseFloat(pitchSlider.value);
    pitchValue.textContent = `${value.toFixed(1)}x`;
});

speakBtn.addEventListener('click', () => {
    const text = mainInput.value.trim();
    if (text !== '') {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.volume = parseFloat(volumeSlider.value);
        utterance.rate = parseFloat(rateSlider.value);
        utterance.pitch = parseFloat(pitchSlider.value);
        speechSynthesis.speak(utterance);
    }
});