export const paginator = {
  total: null,
  page: 1,
  limit: null,
  hasMore: null,

  setPage() {
    this.page += 1;
  },

  getPage() {
    return this.page;
  },

  setTotal(num) {
    this.total = num;
  },

  getTotal() {
    return this.total;
  },

  setLimit(num) {
    this.limit = num;
  },

  getLimit() {
    return this.limit;
  },

  isHasMore() {
    return (this.hasMore = this.total < this.page * this.limit);
  },

  resetPaginator() {
    this.limit = null;
    this.page = 1;
    this.total = null;
    this.hasMore = null;
  },
};
