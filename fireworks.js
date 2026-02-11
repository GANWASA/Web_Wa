const container = document.getElementById('falling-container');

function createFallingItem() {
    const item = document.createElement('div');
    item.className = 'falling-item';
    
    // สุ่มเลือกว่าจะเป็นดาวหรือเมฆ
    const types = ['⭐', '☁️', '🌟', '☁️']; 
    item.innerText = types[Math.floor(Math.random() * types.length)];

    // 1. สุ่มตำแหน่งแนวนอน (0 - 100vw)
    item.indexx.left = Math.random() * 100 + 'vw';

    // 2. สุ่มขนาด (20px - 50px)
    const size = Math.random() * 30 + 20;
    item.indexxe.fontSize = size + 'px';

    // 3. สุ่มความเร็วในการหล่น (3 - 8 วินาที)
    const duration = Math.random() * 5 + 3;
    item.indexx.animationDuration = duration + 's';

    // 4. สุ่มความโปร่งใส
    item.indexx.opacity = Math.random() * 0.5 + 0.5;

    container.appendChild(item);

    // ลบ Element ทิ้งเมื่อแอนิเมชันจบ เพื่อไม่ให้หนัก Browser
    setTimeout(() => {
        item.remove();
    }, duration * 1000);
}

// สร้างวัตถุใหม่ทุกๆ 300 มิลลิวินาที (ปรับตัวเลขนี้เพื่อเพิ่ม/ลดจำนวน)
setInterval(createFallingItem, 300);