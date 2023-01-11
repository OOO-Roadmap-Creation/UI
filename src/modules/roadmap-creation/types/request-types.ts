export interface TreeNode {
    title: string;
    description?: string | null;
    child: TreeNode[] | null;
}

export interface RequestNode {
    title: string;
    description: string;
    priority: 0;
    parentId?: number;
    roadmapId: number;
}
