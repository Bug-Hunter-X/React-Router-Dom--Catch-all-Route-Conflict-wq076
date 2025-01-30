```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path=":id" element={<AboutDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
The solution restructures the routes to ensure that nested routes are processed before the catch-all route. By placing the `/*` route as the last route in the `Routes` component, it will only trigger if no other routes match. Also, note the change of `/*` to `*`, this is an alternative way to achieve the same effect.