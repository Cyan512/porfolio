import type { PageInfo } from "./PageInfo";

export interface PagedModel<T> {
    content: T[];
    page: PageInfo;
}
