import AdminProductImageUpload from "@/components/admin-view/product-image-upload"
import CommonForm from "@/components/common/form"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { addFormInputs, addProductsFromElement } from "@/config"
import { useState } from "react"


function AdminProducts() {

  const [openCreateProductDialog, setOpenCreateProductDialog] = useState(false);
  const [formData, setFormData] = useState(addFormInputs);
  const [imageFile, setImageFile] = useState('');
  const [uploadedImageUrl, setUploadedImageUrl] = useState('')

  const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('====================================');
    console.log(formData);
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
                  loading={false}
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