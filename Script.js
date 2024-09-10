function scrollToSect(sectid) {
    document.getElementById(sectid).scrollIntoView({behavior: 'smooth'});
    console.log('Process complete');
}

// document.getElementById('download-btn').addEventListener('click', function () {
//     const link = document.createElement('a');
//     link.href = 'doc\CV_2024062006163222.pdf'; // Replace with the path to your PDF file
//     link.download = 'CV_2024062006163222.pdf'; // The name of the file to be downloaded
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// });

function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'doc/CV_2024062006163222.pdf';
    link.download = 'CV_2024062006163222.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.addEventListener('DOMContentLoaded', () => {
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    let currentSlide = 0;
    
    next.addEventListener('click', () => {
        const slides = sliderWrapper.children.length;
        currentSlide = (currentSlide + 1) % slides;
        sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
    
    prev.addEventListener('click', () => {
        const slides = sliderWrapper.children.length;
        currentSlide = (currentSlide - 1 + slides) % slides;
        sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
});
