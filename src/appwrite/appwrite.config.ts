import { Client } from "appwrite";
import { appwriteProjectId } from "@/secrets";

const client = new Client();

client.setProject(appwriteProjectId as string);
