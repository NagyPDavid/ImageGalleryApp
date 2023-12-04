let data = {
    photo: 'images/brayden-prato-xFcu4UFTOlI-unsplash.jpg',
    title: 'Rocky Mountains',
    description: 'The Rocky Mountains, also known as the Rockies, are a major mountain range and the largest mountain system in North America.'
};

$('#photo').attr('src', data.photo);
$('#photo-title').text(data.title);
$('#photo-description').text(data.description);

let currentPhoto = 0;
let imagesData = [
    {
        photo: 'images/brayden-prato-xFcu4UFTOlI-unsplash.jpg',
        title: 'Rocky Mountains',
        description: 'The Rocky Mountains, also known as the Rockies, are a major mountain range and the largest mountain system in North America.'
    },
    {
        photo: 'images/ethan-shan-AbNPm3gZ6fw-unsplash.jpg',
        title: 'Mediterranian balconies',
        description: 'Generally, homes in the style are airy and light, and they put a large emphasis on indoor-outdoor living spaces. “Some of the characteristics that evoke Mediterranean style include terra-cotta tile roofs, arched doorways, decorative ironwork and painting, carved wood, and natural stone,” Andrews says.'
    },
    {
        photo: 'images/jason-briscoe-pAqfQye5hlw-unsplash.jpg',
        title: 'Streets of US',
        description: 'The developer, Walters Associates, which also developed the Holiday Inn at 1800 Market (now the Sonesta Philadelphia), planned a construction budget of $50 million for the property.'
    },
    {
        photo: 'images/kazuo-ota-nCNbZq0HUpU-unsplash.jpg',
        title: 'Milky Way above the trees',
        description: 'The Milky Way is the galaxy that includes the Solar System, with the name describing the galaxys appearance from Earth: a hazy band of light seen in the night sky formed from stars that cannot be individually distinguished by the naked eye'
    },
    {
        photo: 'images/mario-beducci-ZhfqOiNgPE0-unsplash.jpg',
        title: 'Sunny Hills',
        description: 'Officially the sunniest city in the world, Yuma, AZ, receives over 4,000 sunlight hours per year. Its also one of the hottest cities in the U.S., and experiences extremely low humidity.'
    },
    {
        photo: 'images/neom-9bE0LlCrX2M-unsplash.jpg',
        title: 'View from between the cliffs',
        description: 'A cliff is a high area of land with a very steep side, especially one next to the sea. The car rolled over the edge of a cliff.'
    },
    {
        photo: 'images/zongnan-bao-nuNn2YvI6GI-unsplash.jpg',
        title: 'Entry of the glacier',
        description: 'Some of the more famous glaciers in the College Fjord are Amherst, Barnard, Bryn Mawr, Harvard, Smith, Vassar and Yale.'
    },
];


function loadPhoto(photoNumber) {
    const currImg = imagesData[photoNumber];
    $('#photo').attr('src', currImg.photo);
    $('#photo-title').text(currImg.title);
    $('#photo-description').text(currImg.description);
}

function setPhoto(n) {
    $('.thumbnail.checked').removeClass('checked');
    currentPhoto = n;
    loadPhoto(n);
    $('.thumbnail[data-index="' + n + '"]').addClass('checked');
}

$('#left-arrow').click(() => {
    if (currentPhoto > 0) {
        currentPhoto--;
    }
    setPhoto(currentPhoto);
});

$('#right-arrow').click(() => {
    if (currentPhoto < imagesData.length - 1) {
        currentPhoto++;
    }
    setPhoto(currentPhoto);
});

imagesData.forEach((item, photoNumber) => {
    $('ul').append(`
    <li class="thumbnail" data-index="${photoNumber}">
        <img data-index="${photoNumber}" src="${imagesData[photoNumber].photo}">
        <div class="title">${imagesData[photoNumber].title}</div>
    </li>`);

    $('li').click((event) => {
        let indexClicked = $(event.currentTarget).data('index');
        setPhoto(indexClicked);
    });
});

// Initial load
setPhoto(currentPhoto);