import { Form, Spinner } from "react-bootstrap";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Primary } from "@/public/colors/colos";

type FormControlType = {
  label: string;
  disabled?: boolean;
  value?: string | number | File[];
  name: string;
  placeholder?: string;
  isLoading: boolean;
  success: boolean;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
};

export default function FormControlElement({
  label,
  disabled = true,
  value,
  name,
  placeholder,
  isLoading,
  success,
  onChange,
}: FormControlType) {
  switch (label) {
    case "Product Name":
    case "Price":
      return (
        <Form.Group className="mb-3">
          <Form.Label>{label}</Form.Label>
          <Form.Control
            name={name}
            disabled={disabled}
            type={label === "Price" ? "number" : "text"}
            value={value as string | number}
            onChange={onChange}
            placeholder={placeholder}
          />
        </Form.Group>
      );

    case "Product Images":
      return (
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              columnGap: "5px",
            }}
          >
            <span>{label}</span>
            {isLoading && <Spinner animation="border" variant="success" size="sm" />}
            {success && <IoIosCheckmarkCircle color={Primary} />}
          </Form.Label>
          <Form.Control
            name={name}
            disabled={disabled}
            accept="image/*"
            onChange={onChange}
            type="file"
            multiple
          />
          <Form.Text>{placeholder}</Form.Text>
        </Form.Group>
      );

    case "Product Category":
      return (
        <Form.Group className="mb-3">
          <Form.Label>{label}</Form.Label>
          <Form.Select
            name={name}
            disabled={disabled}
            value={value as string}
            onChange={onChange}
          >
            <option value="">Choose a category</option>
            <option value="Instant Foods / Noodles">Instant Foods / Noodles</option>
            <option value="Pasta & Noodles">Pasta & Noodles</option>
            <option value="Grains & Staples">Grains & Staples</option>
            <option value="Cooking Oils">Cooking Oils</option>
          </Form.Select>
        </Form.Group>
      );

    default:
      return (
        <Form.Group className="mb-3">
          <Form.Label>{label}</Form.Label>
          <Form.Control
            name={name}
            disabled={disabled}
            value={value as string}
            onChange={onChange}
            as="textarea"
            rows={3}
          />
        </Form.Group>
      );
  }
}
