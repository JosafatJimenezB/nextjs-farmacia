import Skeleton from "react-loading-skeleton";

const ProductSkeleton = () => {
  return (
    <tr>
      <td colSpan="5">
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      </td>
    </tr>
  );
};

export default ProductSkeleton;
