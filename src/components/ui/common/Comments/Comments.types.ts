import type { ReactNode } from "react";

export interface Commenter {
  name: string | null;
  profileImage: string | null;
  phoneNumber: string;
}

export interface CommentItem {
  commentText: string;
  commenter: Commenter;
}

export interface CommentsProps {
  comments?: CommentItem[];
  isLoading?: boolean;
  isError?: boolean;
  isSubmitting?: boolean;
  placeholder?: string;
  emptyText?: string;
  errorText?: string;
  submitLabel?: string;
  submittingLabel?: string;
  onSubmit: (text: string) => Promise<void> | void;
  renderItem?: (item: CommentItem, index: number) => ReactNode;
}