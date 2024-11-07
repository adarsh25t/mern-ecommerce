import AdminProductImageUpload from "@/components/admin-view/product-image-upload"
import CommonForm from "@/components/common/form"
import { toastMessage } from "@/components/common/toast"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { addFormInputs, addProductsFromElement } from "@/config"
import { addProduct } from "@/store/admin/product-slice"
import { AppDispatch, RootState } from "@/store/store"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"


function AdminProducts() {

  const [openCreateProductDialog, setOpenCreateProductDialog] = useState(false);
  const [formData, setFormData] = useState(addFormInputs);
  const [imageFile, setImageFile] = useState('');
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');

  const dispatch = useDispatch<AppDispatch>();
  const productState = useSelector((state: RootState) => state.adminProducts);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formdata = new FormData();
    if (imageFile) {
      formdata.append('image', imageFile);
    }
    formdata.append("title", formData.title);
    formdata.append("price", formData.price);
    formdata.append("description", formData.description);
    formdata.append("category", formData.category);
    formdata.append("salePrice", formData.salePrice);
    formdata.append("brand", formData.brand);
    formdata.append("totalStock", formData.totalStock);

    dispatch(addProduct(formdata)).then((data) => {
      if (typeof data.payload === 'object') {
        if (data.payload?.success) {
          toastMessage(data.payload?.message, "green")
        }
        else {
          toastMessage(data.payload?.message, "red")
        }
      }
    })
    console.log('====================================');
    console.log(formData, imageFile);
    console.log('====================================');
  }

  return (
    <>
      <div className="flex justify-end">
        <Button onClick={() => setOpenCreateProductDialog(true)}>Add New Products</Button>
      </div>

      <Sheet
        open={openCreateProductDialog}
        onOpenChange={() => setOpenCreateProductDialog(false)}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add  New Product</SheetTitle>
            <SheetDescription>
              <div className="pt-4">
                <AdminProductImageUpload
                  file={imageFile}
                  setFile={setImageFile}
                  uploadedImageUrl={uploadedImageUrl}
                  setUploadedImageUrl={setUploadedImageUrl}
                />
                <CommonForm
                  formControlls={addProductsFromElement}
                  formData={formData}
                  setFormData={setFormData}
                  onSumitText={"Add Product"}
                  onSubmit={handleSubmit}
                  loading={true}
                />
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default AdminProducts