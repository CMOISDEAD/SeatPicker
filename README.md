# Simple Seat Picker

> [!IMPORTANT]
> **This library is still in development.** Some features may change, and full stability is not guaranteed until a complete version is released. Please use it with caution and contribute by reporting any issues or suggestions.

**SeatPicker** is a React library that provides an easy-to-use and customizable seat selection system, perfect for ticket booking applications such as cinemas, concerts, or stadiums. The library allows you to create adaptable seat maps with support for custom layouts, seat states, and dynamic selection management.

see the [StoryBook](https://seat-picker.vercel.app/) with the examples and documentation.

<div align="center">
  <img src="https://img.shields.io/npm/v/simple-seat-picker" alt="npm version shield" />
  <img src="https://img.shields.io/github/license/CMOISDEAD/seatpicker" alt="github version" />
  <img src="https://img.shields.io/github/languages/top/CMOISDEAD/seatpicker" alt="github most-language" />
  <img src="https://img.shields.io/bundlephobia/minzip/simple-seat-picker" alt="mizip npm-bundle" />
</div>

## 🪨 Features

- **Customizable Seat Map**: Create seat maps with flexible layouts tailored to your event's specific needs.
- **Dynamic Seat States**: Manage seats with states like `occupied`, `selected`, and `free`.
- **Global State Management**: Utilize React context to easily manage and access selected seats across your application.
- **Responsive Design**: Designed to adapt seamlessly to different screen sizes and contexts, including modals and full-screen views.

## 🚀 Installation

Install the library via npm:

```zsh
pnpm add simple-seat-picker
```

## 📚 Usage

The Storybook is aviable [here](https://seat-picker.vercel.app/) with the examples and documentation.

Import all the components and the default styles.

```jsx
import { createMatrix3x3, SeatMap, SeatMapProvider } from "simple-seat-picker"
import "simple-seat-picker/dist/style.css"
```

Then create the data matrix with the utility function, you can define reserved seats.
```jsx
  const data = createMatrix3x3({ row: 1, column: 1 });
  const reserved = ["B28", "B29", "B30"]
```
Inside the SeatMapProvider pass all the data to SeatMap component.

```jsx
<SeatMapProvider>
  <SeatMap
    size={data.size}
    cells={data.cells}
    reserved={reserved}
  />
</SeatMapProvider>
```

All example code just looks like.

```jsx
import { createMatrix3x3, SeatMap, SeatMapProvider } from "simple-seat-picker"
import "simple-seat-picker/dist/style.css"

function App() {
  const data = createMatrix3x3({ row: 1, column: 1 });
  const reserved = ["B28", "B29", "B30"]


  return (
    <div>
      <SeatMapProvider>
        <SeatMap
          size={data.size}
          cells={data.cells}
          reserved={reserved}
        />
      </SeatMapProvider>
    </div>
  )
}

export default App
```

## 🤝 Contributing

We welcome contributions to improve and expand this library! If you're interested in contributing, please follow these steps:

1. **Fork the Repository**: Click the "Fork" button at the top of this repository to create your own copy.

2. **Clone Your Fork**: Clone your forked repository to your local machine.
    ```bash
    git clone https://github.com/your-username/seatpicker.git
    ```

3. **Create a Branch**: Create a new branch for your feature or bugfix.
    ```bash
    git checkout -b your-feature-branch
    ```

4. **Install Dependencies**: Make sure all dependencies are installed by running:
    ```bash
    pnpm install
    ```

5. **Make Your Changes**: Implement your feature or bugfix.

6. **Test Your Changes**: Ensure that your changes work correctly by running the tests and checking the components in the development environment.

7. **Commit Your Changes**: Commit your changes with a clear and descriptive message.
    ```bash
    git commit -m "Add feature/fix bug: [description of the feature or bug]"
    ```

8. **Push Your Changes**: Push your branch to your forked repository.
    ```bash
    git push origin your-feature-branch
    ```

9. **Create a Pull Request**: Go to the original repository and create a pull request from your fork. Describe your changes in detail and any issues it addresses.

10. **Review Process**: Your pull request will be reviewed by the maintainers. Please be patient and responsive to any feedback or requests for changes.

Thank you for contributing! Every bit of help is appreciated in making this library better.



## 🧻 LICENCE
This project is licensed under the MIT License. See the LICENSE file for more details.
