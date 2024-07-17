
function scrollToSect(sectid) {
    document.getElementById(sectid).scrollIntoView({behavior: 'smooth'});
    console.log('Process complete');
}

function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'doc\CV_2024062006163222.pdf';
    link.download = 'CV_2024062006163222.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

