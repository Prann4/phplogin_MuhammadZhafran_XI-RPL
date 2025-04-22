// JavaScript untuk menggerakkan gambar hiu
const shark = document.getElementById('shark');
    let pos = -200;

        function moveShark() {
            pos += 2; // kecepatan gerak
            if (pos > window.innerWidth + 150) {
                pos = -200; // reset ke kiri jika keluar layar
            }
            shark.style.left = pos + 'px';
            requestAnimationFrame(moveShark);
        }

        moveShark();