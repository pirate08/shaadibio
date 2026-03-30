import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useAuthStore } from "@/stores/useAuthStore";
import { RegisterData, LoginData } from "@/types/auth";
