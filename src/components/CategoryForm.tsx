import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function CategoryForm() {
  return (
    <form className="w-screen h-screen">
      <Label htmlFor="category">Category</Label>
      <Input type="text" id="category" name="category" />
    </form>
  );
}
