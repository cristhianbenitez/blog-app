import { useDispatch } from 'react-redux';
import { useField } from '../hooks/useField';
import { createNewBlog } from '../reducers/blogSlice';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export const BlogForm = () => {
  const { reset: titleReset, ...title } = useField('text');
  const { reset: authorReset, ...author } = useField('text');
  const { reset: urlReset, ...url } = useField('text');
  const { reset: textReset, ...text } = useField('text');

  const dispatch = useDispatch();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const newBlog = { author: author.value, title: title.value, url: url.value, text: text.value };
    dispatch(createNewBlog(newBlog));
    titleReset();
    authorReset();
    urlReset();
    textReset();
  };

  return (
    <Form className="mb-4" onSubmit={handleOnSubmit}>
      <Row>
        <Col sm={4}>
          <Form.Label htmlFor="title">Title</Form.Label>
          <Form.Control id="title" className="mb-3" placeholder="Title" {...title} />
          <Form.Label htmlFor="author">Author</Form.Label>
          <Form.Control id="author" className="mb-3" placeholder="Author" {...author} />
          <Form.Label htmlFor="url">Url</Form.Label>
          <Form.Control id="url" className="mb-3" placeholder="Url" {...url} />
        </Col>
        <Col sm={8}>
          <Form.Label htmlFor="text">Text</Form.Label>
          <Form.Control className="mb-3" id="textarea" as="textarea" placeholder="Text" {...text} rows={8} />
        </Col>
      </Row>
      <Button id="create-btn" type="submit">
        Create
      </Button>
    </Form>
  );
};
