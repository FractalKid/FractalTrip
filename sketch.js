let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30); // Устанавливает 30 кадров в секунду для плавного анимационного эффекта
  colorMode(HSB, 360, 100, 100); // Цветовая модель HSB
}

function draw() {
  background(0);
  translate(width / 2, height / 2); // Центрирование холста
  
  strokeWeight(2); // Толщина линий
  for (let i = 0; i < 100; i++) {
    stroke((angle + i) % 360, 80, 100); // Цвет линий меняется на основе угла
    line(sin(angle + i) * width * 0.5, cos(angle + i) * height * 0.5, tan(angle + i * 0.5) * 50, sin(angle + i * 0.5) * 50);
  }
  
  angle += 0.01; // Плавное увеличение угла
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Автоматическое изменение размера холста при изменении окна
}
