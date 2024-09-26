import { createCategory } from "@/actions/actions";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function CategoryForm({
  onFormSubmission,
}: {
  onFormSubmission: () => void;
}) {
  return (
    <form
      action={async () => {
        await createCategory(new FormData(event?.target as HTMLFormElement));
        onFormSubmission();
      }}
    >
      <Label htmlFor="category">Category</Label>
      <Input type="text" id="category" name="category" />
      <Button type="submit" className="mt-4">
        Add
      </Button>
    </form>
  );
}
