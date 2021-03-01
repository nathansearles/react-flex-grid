# React Flex Grid

:fire: **In active development** :fire:

A simple React based grid system using flex. Uses 12 columns based on the 8px
grid system.

## To do

- [ ] Examples website
- [ ] Project level config
- [ ] Testing
- [ ] Refine docs

## Installation

```bash
#Yarn
yarn add @nathansearles/react-flex-grid

#NPM
npm install @nathansearles/react-flex-grid
```

## Column

| Prop       | Description                   | Keys                    | Values                                                                | Types                   |
| ---------- | ----------------------------- | ----------------------- | --------------------------------------------------------------------- | ----------------------- |
| `columns`  | Define columns by breakpoint  | xs, sm, md, lg, xl, xxl | 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9 \| 10 \| 11 \| 12 \| 'auto' | `string:string\|number` |
| `offsets`  | Define offsets by breakpoint  | xs, sm, md, lg, xl, xxl | 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9 \| 10 \| 11 \| 12           | `string:number`         |
| `ordering` | Define ordering by breakpoint | xs, sm, md, lg, xl, xxl | any number                                                            | `string:number`         |

### Examples

**Columns**

```jsx
<Column columns={{ xs: 12, md: 10, xl: 8 }}>Lorem ipsum...</Column>
```

**Offsets**

```jsx
<Column offsets={{ xs: 1, md: 2, xl: 4 }}>Lorem ipsum...</Column>
```

**Ordering**

```jsx
<Column ordering={{ xs: 1, md: 2, xl: 1 }}>Lorem ipsum...</Column>
```

## Row

| Prop      | Description                                | Keys                    | Values                             | Types           |
| --------- | ------------------------------------------ | ----------------------- | ---------------------------------- | --------------- |
| `justify` | Define justification by breakpoint         | xs, sm, md, lg, xl, xxl | "normal", "start", "center", "end" | `string:string` |
| `align`   | Define alignment by breakpoint             | xs, sm, md, lg, xl, xxl | "normal", "start", "center", "end" | `string:string` |
| `spacing` | Define gutter spacing \* 8px by breakpoint | xs, sm, md, lg, xl, xxl | 0 , 1 , 2 , 3 , 4                  | `string:number` |

### Examples

**Justify**

```jsx
<Row justify={{ xs: 'center', md: 'start', xl: 'end' }}>Lorem ipsum...</Row>
```

**Align**

```jsx
<Row align={{ xs: 'center', md: 'start', xl: 'end' }}>Lorem ipsum...</Row>
```

**Spacing**

```jsx
<Row align={{ xs: 'center', md: 'start', xl: 'end' }}>Lorem ipsum...</Row>
```

## Simple example

```jsx
import { Container, Row, Column } from '@nathansearles/react-flex-grid';

function App() {
  return (
    <Container>
      <Row>
        <Column columns={{ xs: 12, md: 6, lg: 4 }}>
          <h2>Lorem ipsum dolor sit amet...</h2>
        </Column>
        <Column columns={{ xs: 12, md: 6, lg: 4 }}>
          <h2>Lorem ipsum dolor sit amet...</h2>
        </Column>
      </Row>
    </Container>
  );
}
```
