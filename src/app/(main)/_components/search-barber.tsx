"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  barberName: z
    .string({
      message: "Digite algo primeiro para pesquisar",
    })
    .trim()
    .min(1, { message: "Digite algo primeiro para pesquisar" }),
});

type FormSchema = z.infer<typeof formSchema>;

export const SearchBarber = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      barberName: "",
    },
  });

  const router = useRouter();

  const onSubmit = (data: FormSchema) => {
    router.push(`/barbershops?barbershopName=${data.barberName}`);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
        <FormField
          control={form.control}
          name="barberName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  {...field}
                  placeholder="Buscar"
                  className="border border-[#26272b] placeholder:text-sm bg-[#1a1b1f]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-[#8162ff]">
          <Search />
        </Button>
      </form>
    </Form>
  );
};
