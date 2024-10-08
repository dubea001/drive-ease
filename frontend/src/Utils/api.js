import {assets} from '../assets/assets'
export const cars = [
      {
      name: "Rolls Royce Spectre",
      price_starting_from: 25000,
      description: "A luxurious and stylish electric car that's perfect for those who seek elegance and performance.",
      seats: 4,
      top_speed_kmh: 250,
      rating: 5.0,
      image: assets.rolls
    },
    {
      name: "Ferrari SF90",
      price_starting_from: 20000,
      description: "A hybrid super car that delivers nearly 1000 horsepower, combining cutting-edge technology with exceptional performance.",
      seats: 2,
      top_speed_kmh: 340,
      rating: 5.0,
      image: assets.ferrari
    },
    {
      name: "Ford F-150 Rattler",
      price_starting_from: 15000,
      description: "An off-road ready pick up that combines rugged performance with modern comfort and technology.",
      seats: 5,
      top_speed_kmh: 170,
      rating: 5.0,
      image: assets.ford
    },
    {
      name: "2023 Hyundai Palisade",
      price_starting_from: 10000,
      description: "A spacious and stylish mid-size SUV designed for families, offering advanced safety features and a comfortable ride.",
      seats: 7,
      top_speed_kmh: 210,
      rating: 5.0,
      image: assets.hyundai
    },
    {
      name: "Toyota Coaster 29-Seaters",
      price_starting_from: 9000,
      description: "A reliable and spacious mini-bus ideal for group travel, combining comfort and practicality.",
      seats: 29,
      top_speed_kmh: 135,
      rating: 5.0,
      image: assets.coaster
    },
    {
      name: "2023 Mercedes-Benz GLC",
      price_starting_from: 18000,
      description: "A luxurious and high-performance compact SUV designed for a sophisticated driving experience.",
      seats: 5,
      top_speed_kmh: 240,
      rating: 5.0,
      image: assets.mercedes
    }
]

export const testimonials = [
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing   elit. Commodi nemo perspiciatis pariatur, debitis   provident omnis tempora dolore autem necessitatibus quidem, accusantium impedit quae tempore. Asperiores?',
        name: 'Bruno Fernandez',
        title: 'CEO of blueprint',
        image: assets.Brian,
    },
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing   elit. Commodi nemo perspiciatis pariatur, debitis   provident omnis tempora dolore autem necessitatibus quidem, accusantium impedit quae tempore. Asperiores?',
        name: 'Brian Authur',
        title: 'Marketing Specialist',
        image: assets.Bruno,
    },
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing   elit. Commodi nemo perspiciatis pariatur, debitis   provident omnis tempora dolore autem necessitatibus quidem, accusantium impedit quae tempore. Asperiores?',
        name: 'Nelson Becker',
        title: 'Ui/Ux designer Tex cafe',
        image: assets.Nelson,
    },
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing   elit. Commodi nemo perspiciatis pariatur, debitis   provident omnis tempora dolore autem necessitatibus quidem, accusantium impedit quae tempore. Asperiores?',
        name: 'Jamie Fassonaki',
        title: 'CEO of PhotoLabs',
        image: assets.Jamie,
    },
];

export const links = [
  {href: 'about', label: 'About us'},
  {href: 'cars', label: 'Cars'},
  {href: 'advantages', label: 'Why choose us'},
  {href: 'testimonial', label: 'Testimonial'},
  {href: 'faq', label: 'F.A.Qs.'},
]