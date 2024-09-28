"use client";

import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import CategoryForm from "./CategoryForm";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export default function AddCategoryBtn() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
      <DialogTrigger asChild>
        <Button className="bg-cyan-700 hover:bg-cyan-700/70 text-2xl">
          <PlusCircledIcon />
        </Button>
      </DialogTrigger>

      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
        </DialogHeader>

        <CategoryForm onFormSubmission={() => setIsFormOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
