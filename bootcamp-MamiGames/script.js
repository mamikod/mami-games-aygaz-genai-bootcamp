document.addEventListener("DOMContentLoaded", function() {
    const images = [
      {
        name: "Gölgelerin Efendisi",
        description: "Antik bir dünyada geçen bu RPG'de, kayıp krallığın sırlarını çözün. Gölgelerin Efendisi'nde efsanevi canavarlarla savaşırken, büyülü dünyanın derinliklerine dalın. Unutulmuş toprakları keşfedin ve kaderinizi yazın.",
        src: "Afişler-İçerik/lordsofshadowsgamepp.jpeg"
      },
      {
        name: "Kozmik Kaçış",
        description: "Uzay geminizi düşman topraklarından kaçırın. Kozmik Kaçış'ta refleksleriniz test edilecek. Zekice manevralar yapın ve galaksiyi kurtarın. Her seviye, sizi yıldızlar arası bir maceraya sürükleyecek",
        src: "Afişler-İçerik/cosmickaçışpp.jpeg"
      },
      {
        name: "Zamanın Kumları",
        description: "Zamanda yolculuk ederek tarihi olayları değiştirin. Zamanın Kumları'nda tarihin akışını yönlendirin. Her kararınız, geleceği şekillendirecek. Tarihi yeniden yazmaya hazır.",
        src: "Afişler-İçerik/zamanınsandspps.jpeg"
      },
      {
        name: "Sonsuz Labirent",
        description: "Bu bulmaca oyununda, sonsuz değişen labirentlerden çıkış yolu bulun. Sonsuz Labirent'te her seviye, zekanızı sınayacak. Yolunuzu bulun ve labirentin efendisi olun.",
        src: "Afişler-İçerik/endlesslabirentppss.jpeg"
      },
      {
        name: "Derin Uzay Sözleşmesi",
        description: "Bir uzay kaşifi olarak, yeni gezegenler keşfedin ve ticaret yapın. Derin Uzay Sözleşmesi'nde galaksiyi dolaşın, nadir kaynaklar bulun ve evrenin en zengin tüccarı olun.*",
        src: "Afişler-İçerik/deepspacesözleşmesipps.jpeg"
      },
      {
        name: "Karanlıkta Yankı",
        description: "Bu korku oyununda, terk edilmiş bir hastanede hayatta kalmaya çalışın. Karanlıkta Yankı'da nefesinizi tutun ve karanlığın içindeki sırları açığa çıkarın. Cesaretiniz var mı?",
        src: "Afişler-İçerik/ekointhedarkpps.jpeg"
      },
      {
        name: "Dünya İnşaatçısı",
        description: "Kendi dünyanızı yaratın ve yönetin. Dünya İnşaatçısı'nda kendi medeniyetinizi kurun, kaynakları yönetin ve dünyanızın kaderini belirleyin.",
        src: "Afişler-İçerik/worldinşaatçıısmükpps.jpeg"
      },
      {
        name: "Savaşçıların Turnuvası",
        description: "En güçlü savaşçıyı yetiştirin ve arenada savaşın. *Savaşçıların Turnuvası'nda stratejinizi belirleyin, rakiplerinizi yenin ve şampiyon olun.",
        src: "Afişler-İçerik/turnuvaoffighterspps.jpeg"
      }
    ];
  
    const gallerySection = document.getElementById("gallery");
  
    images.forEach(function(image) {
      const galleryItem = document.createElement("div");
      galleryItem.classList.add("col-lg-3", "col-md-6", "col-sm-12", "gallery-item");
  
      const img = document.createElement("img");
      img.setAttribute("src", image.src);
      img.setAttribute("alt", image.name);
      img.classList.add("img-fluid");
  
      const overlay = document.createElement("div");
      overlay.classList.add("overlay");
  
      const overlayContent = document.createElement("div");
      overlayContent.classList.add("overlay-content");
  
      const overlayTitle = document.createElement("h3");
      overlayTitle.textContent = image.name;
  
      const overlayText = document.createElement("p");
      overlayText.textContent = image.description;
  
      overlayContent.appendChild(overlayTitle);
      overlayContent.appendChild(overlayText);
  
      overlay.appendChild(overlayContent);
  
      galleryItem.appendChild(img);
      galleryItem.appendChild(overlay);
  
      gallerySection.appendChild(galleryItem);
    });
  });
  