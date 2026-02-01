let showingImage = true;

function toggleMedia() {
    const img = document.getElementById("profileImage");
    const video = document.getElementById("profileVideo");
    const omMeg = document.getElementById("OmMeg");

    if (showingImage) {

        img.style.display = "none";
        video.style.display = "block";
        video.play();

        const yOffset = -120;
        const y = video.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
            top: y,
            behavior: "smooth"
        });

    } else {
        video.pause();
        video.currentTime = 0;
        video.style.display = "none";
        img.style.display = "block";

        omMeg.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    showingImage = !showingImage;
}