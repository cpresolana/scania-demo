export default function loader2 () {
    if (document.querySelector("#white-btn-2") !== null) {
        document.querySelector("#white-btn-2").addEventListener("click", function () {
            console.log('white');
            pannellum.viewer('panorama', {
                "type": "equirectangular",
                "panorama": "/images/line1_1.jpg",
                "autoLoad": true
            });
        })
    }
    
    if (document.querySelector("#red-btn-2") !== null) {
        document.querySelector("#red-btn-2").addEventListener("click", function red() {
            pannellum.viewer('panorama', {
                "type": "equirectangular",
                "panorama": "/images/line1_1.jpg",
                "autoLoad": true
            });
        })
    }
    
    if (document.querySelector("#blue-btn-2") !== null) {
    
        document.querySelector("#blue-btn-2").addEventListener("click", function blue() {
            pannellum.viewer('panorama', {
                "type": "equirectangular",
                "panorama": "/images/line1_1.jpg",
                "autoLoad": true
            });
        })
    }
    
    if (document.querySelector("#grey-btn-2") !== null) {
        document.querySelector("#grey-btn-2").addEventListener("click", function grey() {
            pannellum.viewer('panorama', {
                "type": "equirectangular",
                "panorama": "/images/line1_1.jpg",
                "autoLoad": true
            });
        })
    }
    
}